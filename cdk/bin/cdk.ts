#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
// import { CodePipelineSampleStack } from '../lib/codepipline-sample-stack'
import { FargateSampleStack } from '../lib/fargate-sample-stack'

const app = new cdk.App()
// new CodePipelineSampleStack(app, 'CodePipelineSampleStack', {
//   env: {
//     region: 'ap-northeast-1',
//   },
// })
new FargateSampleStack(app, 'FargateSampleStack', {
  env: {
    region: 'ap-northeast-1',
  },
})
