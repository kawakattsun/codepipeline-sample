#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import { FargateSampleStack } from '../lib/fargate-sample-stack'

const app = new cdk.App()

new FargateSampleStack(app, 'FargateSampleStack', {
  env: {
    region: 'ap-northeast-1',
  },
})
