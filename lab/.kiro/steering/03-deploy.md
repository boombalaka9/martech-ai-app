---
inclusion: manual
---

Deploy the SPA application to S3 + CloudFront:

1. Locate the frontend directory (`./frontend`). If it is missing, inform the participant and help them identify the correct project root.

2. Build the frontend for production:
   ```bash
   cd frontend && npm install --legacy-peer-deps && npm run build
   ```
   - Verify that `next.config.ts` (or `.js`/`.mjs`) includes `output: 'export'`. If it does not, add it before building.
   - Confirm the `frontend/out/` directory is generated after the build.

3. Run the deploy script from the project root:
   ```bash
   bash deploy.sh
   ```

4. The script will automatically:
   - Detect the AWS region
   - Find the App-hosting CloudFormation stack and extract its outputs (S3 bucket name, CloudFront distribution ID, app URL)
   - Sync the frontend build output to the S3 bucket
   - Invalidate the CloudFront cache

5. Once deployment completes successfully, share the public CloudFront URL with the participant. The script outputs:
   - **App**: `https://<cloudfront-domain>/`

6. If deployment fails, read the error message carefully and help the participant resolve the issue. Common problems:
   - **Frontend build failure**: Check for TypeScript errors or missing dependencies
   - **App-hosting stack not found**: Workshop infrastructure may not be fully provisioned yet — wait and retry
   - **S3 sync failure**: Check AWS credentials are configured correctly

7. Remind the participant that CloudFront may take 1-2 minutes to reflect changes on first deploy.
