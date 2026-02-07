# Portfolio-Angel-Salazar 🚀
### Solutions Architect & Cloud Security Portfolio

This repository contains my professional portfolio, developed with a focus on scalability, containerization, and cloud architecture best practices using AWS.

## 🛠️ Tech Stack
- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: PostgreSQL
- **Infrastructure**: Docker, AWS ECR, AWS App Runner, Route 53, Cloud Watch

## 📈 Development Logs (Progress Logs)

> **Phase 1: Environment Configuration and Credential Security**
> * **Secret Management**: Implementation of `.gitignore` to exclude the `.env` file. This is a critical security practice to prevent credential leakage in public repositories.
> * **Standardization**: Git Global configuration and repository naming following professional deployment conventions.
> * **Version Control**: Initialization of the `main` branch and linking to the remote origin on GitHub.

> **Phase 2: Containers and Portability with Docker**
> * **Multi-stage Architecture**: Implementation of a Dockerfile with Build and Production stages. This drastically reduces the size of the final image and improves security by not including the original source code or development tools in the professional runtime environment.
> * **Base Image Optimization**: Strategic selection of node:20-slim to minimize the attack surface and ensure that AWS ECR storage remains within the free tier limits (500 MB).
> * **Artifact Isolation**: Configuration of .dockerignore to ensure that sensitive files (.env), local dependency folders (node_modules), and Git metadata are not transferred to the build context, optimizing pipeline speed.

> **Phase 3: Cloud Persistence and Container Networking**
> * **Serverless Data Infrastructure**: Migration of the local database to **Neon PostgreSQL (v17)** in the `us-east-1` (Virginia) region. This choice minimizes latency for deployment on AWS App Runner.
> * **Docker Networking Resolution**: Configuration of the listening host at `0.0.0.0` and port mapping `8080:8080`. The “Empty Response” error was resolved by ensuring that traffic from the local host can cross the container isolation.
> * **Migration Strategy (Dump & Restore)**: Implementation of a data extraction process using `pg_dump` and reformatting to `INSERT` commands to ensure compatibility with managed engines.
> * **Sequence Integrity**: Manual synchronization of ID counters (`setval`) after data injection, ensuring that new insertions (contact messages) do not generate primary key conflicts.

**Phase 4: Identity Governance and AWS CLI Configuration**
> * **Access Management (IAM)**: Creation of the programmatic user portfolio-deployer under the principle of least privilege. Specific policies were assigned for Amazon ECR (image management) and AWS App Runner (service orchestration), ensuring a secure and controlled deployment environment.
> * **Security Policies**: Generation of access keys for the command line interface, enabling encrypted communication between the local development environment and the AWS control plane.
> * **CLI Configuration**: Linking the local terminal to the cloud provider using aws configure. The us-east-1 (N. Virginia) region was standardized to maintain geographic consistency with the Neon database and minimize network latency in the final architecture.
> * **STS Validation**: Verifying the secure connection with AWS STS (Security Token Service) to confirm the identity of the deployer before pushing images.

> **Phase 5: Migration to AWS ECR**
> * **Registry Provisioning**: Creation of the private portfolio-repo repository in the us-east-1 region using AWS CLI.
> * **Container Layer Authentication**: Implementation of get-login-password to establish a secure channel between the local Docker daemon and the Amazon registry.
> * **Image Publishing**: Execution of docker push, transferring the optimized multi-stage architecture (based on node:20-slim) to the AWS infrastructure.

**Phase 6: Orchestration and Continuous Deployment**
> * **App Runner Provisioning**: Configuration of a managed serverless service for public exposure of the portfolio.
> * **Delivery Pipeline (CD)**: Activation of Automatic Deployment, linking the ECR repository with the execution environment for real-time updates.
> * **Cloud Secret Injection**: Configuration of secure environment variables in the AWS control plane, enabling persistent connectivity to the Neon cluster.
> * **Production Networking**: Mapping of listening port 8080 and automatic generation of SSL/TLS certificate for secure browsing (HTTPS).

**Phase 7: Secret Injection and DB Connectivity**
> * **Configuration Externalization**: Implementation of environment variables in the App Runner control plane, following the “Config” factor of 12-Factor Apps.
> * **Encryption in Transit**: Configuration of DATABASE_URL with sslmode=require parameters, ensuring that communication between AWS and Neon is 100% secure.
> * **Decoupling of Environments**: Source code integrity is maintained by not hardcoding credentials, allowing the same Docker image to be agnostic to the execution environment.

**Phase 8: Storage Efficiency and Costs - Route 53**
> * **Artifact Optimization**: Achieved a final production image of 164.66 MB using multi-stage architecture, ensuring compliance with the AWS ECR free tier (500 MB threshold).
> * **Financial Projection**: Storage operating cost of $0.00 USD/month, optimizing the TCO (Total Cost of Ownership) of the cloud infrastructure.
> * **Deployment Performance**: Reduction of latency in the deployment lifecycle (Image Pull), facilitating more agile Continuous Deployment processes.
> * **Digital Identity Management**: Registration of the angel-salazar.com domain in Route 53 and linking via ALIAS records, ensuring native and efficient name resolution.

**Phase 9: FinOps and Proactive Budget Control**
> * **Notification Configuration (SNS)**: Creation of a topic in Amazon Simple Notification Service to establish a critical alert channel linked to my personal email.
> * **CloudWatch Billing Alarm**: Implementation of a budget alarm in the us-east-1 region. A static threshold was configured to monitor total estimated charges, ensuring immediate reaction to any cost deviations.
> * **Cost Optimization**: Following a one-time investment of $15.00 USD for the domain in Route 53, the architecture stabilized at a projected operating cost of $5.00 - $7.00 USD per month, demonstrating efficient financial management of the serverless environment.

**Phase 10: CI/CD Automation with GitHub Actions**
> * **Continuous Delivery Pipeline**: Implementation of an automated workflow that integrates AWS authentication, image building, and push to ECR on each commit.
> * **Pipeline Security**: Use of GitHub Actions Secrets for encrypted management of AWS Access Keys.
> * **Deployment Performance**: Reduction of latency in the deployment lifecycle (Image Pull), facilitating more agile Continuous Deployment processes.

[![Architecture](https://img.shields.io/badge/Architecture-AWS_Serverless-orange)](https://aws.amazon.com/)
