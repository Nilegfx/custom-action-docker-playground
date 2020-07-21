const core = require('@actions/core');
const { writeFileSync, mkdirSync } = require('fs');
const { join } = require('path');
module.exports = function configureKubectl() {
  const HOME_DIR = process.env.HOME;
  const kubeConfigEncoded = core.getInput('kubeconfig');
  const kubeConfig = Buffer.from(kubeConfigEncoded, 'base64').toString('utf-8');
  const KUBECONFIG_PATH = join(HOME_DIR, '.kube');
  mkdirSync(KUBECONFIG_PATH, { recursive: true });
  writeFileSync(join(KUBECONFIG_PATH, 'config'), kubeConfig);
};
