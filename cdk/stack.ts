import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { StaticSite } from "./static-site/static-site";

if (!process.env.DOMAIN_NAME) {
  throw "DOMAIN_NAME env not specified";
}
if (!process.env.CERTIFICATE_ARN) {
  throw "CERTIFICATE_ARN env not specified";
}
const domainName = process.env.DOMAIN_NAME.split(".").slice(-2).join(".");
const subDomain = process.env.DOMAIN_NAME.split(".").slice(0, -2).join(".");

export class AppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new StaticSite(this, "StaticSite", {
      domainName: domainName,
      siteSubDomain: subDomain,
      assetsFolder: "./dist",
      certificateArn: process.env.CERTIFICATE_ARN!,
    });
  }
}
