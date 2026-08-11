---
inclusion: manual
---

Place the AWS Security Agent domain verification token in the app's S3 bucket. The participant must provide their verification token (from the Security Agent console).

1. Ask the participant for their verification token. They can find it in the AWS Security Agent console under Penetration Test → Target Domains → their domain.

2. Determine the AWS region. Run:
   ```
   aws configure get region
   ```
   If empty, ask the participant which region their workshop is deployed in.

3. Find the App-hosting CloudFormation stack and extract outputs:
   ```
   aws cloudformation describe-stacks --query "Stacks[?Outputs[?OutputKey=='AppBucketName']].{Name:StackName,BucketName:Outputs[?OutputKey=='AppBucketName'].OutputValue|[0],AppURL:Outputs[?OutputKey=='AppURL'].OutputValue|[0]}" --output json
   ```
   Extract the `BucketName` and `AppURL` from the result.

4. Upload the verification token to S3. Run this command, replacing `<BUCKET_NAME>`, `<TOKEN>`, and `<REGION>`:
   ```
   printf '{"tokens":["<TOKEN>"]}' | aws s3 cp - "s3://<BUCKET_NAME>/.well-known/aws/securityagent-domain-verification.json" --content-type "application/json" --region "<REGION>"
   ```

5. Verify the token is accessible by checking the URL. Share the verification URL with the participant:
   ```
   <AppURL>/.well-known/aws/securityagent-domain-verification.json
   ```

6. Tell the participant:
   - "Your verification token is now in place."
   - "Go to the AWS Security Agent console → Target Domains → select your domain → click Verify."
   - "If verification fails, wait 30-60 seconds for CloudFront propagation and try again."
