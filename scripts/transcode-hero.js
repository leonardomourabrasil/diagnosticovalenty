/*
  Transcode public/hero.mp4 to optimized MP4 (faststart, H.264) and WebM (VP9).
  Usage: node scripts/transcode-hero.js
*/

import path from 'path';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

ffmpeg.setFfmpegPath(ffmpegPath);

const projectRoot = process.cwd();
const inputPath = path.join(projectRoot, 'public', 'hero.mp4');
const outputMp4 = path.join(projectRoot, 'public', 'hero_opt.mp4');
const outputWebm = path.join(projectRoot, 'public', 'hero.webm');

function ensureInput() {
  if (!fs.existsSync(inputPath)) {
    console.error(`Input video not found: ${inputPath}`);
    process.exit(1);
  }
}

function transcodeMp4() {
  return new Promise((resolve, reject) => {
    console.log('Transcoding MP4 →', outputMp4);
    ffmpeg(inputPath)
      .outputOptions([
        '-movflags', '+faststart',
        '-c:v', 'libx264',
        '-preset', 'fast',
        '-tune', 'fastdecode',
        '-crf', '22',
        '-pix_fmt', 'yuv420p',
        '-r', '30',
        '-g', '60',
        '-bf', '0',
        '-x264-params', 'keyint=60:min-keyint=60:no-scenecut=1',
        '-vf', 'scale=1280:-2',
      ])
      .noAudio()
      .on('error', (err) => reject(err))
      .on('end', () => resolve())
      .save(outputMp4);
  });
}

function transcodeWebm() {
  return new Promise((resolve, reject) => {
    console.log('Transcoding WebM →', outputWebm);
    ffmpeg(inputPath)
      .outputOptions([
        '-c:v', 'libvpx-vp9',
        '-crf', '33',
        '-b:v', '0',
        '-r', '30',
        '-g', '60',
        '-row-mt', '1',
        '-tile-columns', '2',
        '-frame-parallel', '1',
        '-aq-mode', '0',
        '-pix_fmt', 'yuv420p',
        '-vf', 'scale=1280:-2',
      ])
      .noAudio()
      .on('error', (err) => reject(err))
      .on('end', () => resolve())
      .save(outputWebm);
  });
}

async function run() {
  ensureInput();
  try {
    await transcodeMp4();
    await transcodeWebm();
    console.log('✔ Transcoding completed. Files written:');
    console.log('  -', path.relative(projectRoot, outputMp4));
    console.log('  -', path.relative(projectRoot, outputWebm));
  } catch (err) {
    console.error('Transcoding error:', err?.message || err);
    process.exit(1);
  }
}

run();