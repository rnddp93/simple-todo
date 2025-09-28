# 12. Deployment Architecture

*   **Deployment Strategy:** Main branch is continuously deployed to Production on Vercel. Pull Requests are deployed to unique Preview URLs.
*   **CI/CD Pipeline:** A simple GitHub Actions workflow will run on every PR to execute linting and tests. Vercel handles the deployment automatically upon merge to main.
*   **Environments:**
    *   **Development:** Local machine (`localhost`)
    *   **Staging:** Vercel Preview Deployments (`*-project.vercel.app`)
    *   **Production:** Vercel Production Deployment (Custom Domain)

---
