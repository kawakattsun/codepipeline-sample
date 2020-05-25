import * as cdk from '@aws-cdk/core'
import * as ec2 from '@aws-cdk/aws-ec2'
import * as ecs from '@aws-cdk/aws-ecs'
import * as ecr from '@aws-cdk/aws-ecr'
import * as ecs_patterns from '@aws-cdk/aws-ecs-patterns'

export class CodePipelineSampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const vpc = new ec2.Vpc(this, 'codepipelineSampleVpc', {
      maxAzs: 2,
    })

    const cluster = new ecs.Cluster(this, 'codepipelineSampleCluster', {
      vpc: vpc,
    })

    const repository = ecr.Repository.fromRepositoryName(
      this,
      'codepipelineSampleGo',
      'codepipeline-sample-go'
    )

    new ecs_patterns.ApplicationLoadBalancedFargateService(
      this,
      'codepipelineSampleService',
      {
        cluster: cluster,
        serviceName: 'codepipelineSampleService',
        cpu: 256,
        desiredCount: 1,
        taskImageOptions: {
          image: ecs.ContainerImage.fromEcrRepository(repository),
        },
        memoryLimitMiB: 512,
        publicLoadBalancer: true,
      }
    )
  }
}
