# Git Workflow for Development, Staging, and Production

This document describes a Git workflow to manage development (`develop`), staging (`homolog`), and production (`production`) branches, ensuring an organized and efficient process for developing new features and bug fixes.

## 1. Creation and Development of Features

### 1.1. Creating the Feature Branch
- Create a new branch from `develop` to develop the new feature. Name the branch according to the feature being developed (e.g., `feature/newFeature`).

### 1.2. Development on the Feature Branch
- Develop the new feature on the `feature/newFeature` branch.
- Make regular commits to save progress and ensure the work is properly versioned.

### 1.3. Pull Request (PR) to `develop`
- After completing the feature development, create a PR from the `feature/newFeature` branch to the `develop` branch.
- Use **Squash and Merge** to combine all commits from the feature branch into a single commit before merging into `develop`. This keeps the `develop` history clean and organized.

## 2. Testing in Staging (`homolog`)

### 2.1. PR from `develop` to `homolog`
- After merging the `feature/newFeature` PR into `develop`, create a PR from the `develop` branch to the `homolog` branch.
- Use **Create a Merge Commit** to preserve the complete history and create a clear merge commit. This helps track the integration of changes from `develop` to `homolog`.

### 2.2. Testing on the `homolog` Branch
- Conduct thorough testing on the `homolog` branch to ensure the new feature works correctly and does not introduce bugs.

## 3. Fixes and Validations

### 3.1. Test Failures in `homolog`
- If tests in `homolog` fail, do not delete the `feature/newFeature` branch.
- Return to the `feature/newFeature` branch to make necessary fixes.

### 3.2. Fixes on the `feature/newFeature` Branch
- Make necessary fixes on the `feature/newFeature` branch.
- If there are new changes in the `develop` branch, merge these changes into the `feature/newFeature` branch to ensure you are working with the most updated version.

### 3.3. PR of Fixes to `develop`
- After making the fixes, create a new PR from the `feature/newFeature` branch to the `develop` branch.
- After code review, use **Squash and Merge** to combine all commits from the feature branch into a single commit before merging into `develop`.

### 3.4. PR from `develop` to `homolog` and Retest
- After merging the fixes into `develop`, create a PR from `develop` to `homolog` and repeat the tests.
- Use **Create a Merge Commit** to preserve the complete history and create a clear merge commit.

## 4. Deploy to Production (`production`)

### 4.1. PR from `homolog` to `production`
- After validation in `homolog`, create a PR from the `homolog` branch to the `production` branch.
- Use **Create a Merge Commit** to preserve the complete history and create a clear merge commit. This ensures that the production branch has a clear record of when changes were integrated.

## 5. Synchronization of Branches (Optional)

### 5.1. Reverse Merge from `production` to `develop`
- If there are direct changes in `production` (e.g., hotfixes), perform a reverse merge from `production` to `develop` to ensure `develop` is up-to-date with all changes applied directly to `production`.

## 6. Automating Feature Branch Deletion

### 6.1. Automated Deletion of Feature Branches
- Upon updating the `production` branch, a workflow will automatically check for merged feature branches and delete them if they have already been integrated into `production`.

### 6.2. Deletion of Other Branch Types
- The same workflow can be extended to delete other types of branches (e.g., `hotfix/`, `fix/`, `chore/`, `docs/`, `release/`). This ensures that all branches that have been fully integrated into `production` are cleaned up automatically.

#### Considerations:
- **Risk of Deleting In-Use Branches:** Ensure that only branches that are no longer needed and have been fully integrated into `production` are deleted.
- **Flow Consistency:** Make sure the workflow aligns with your team's development process to avoid accidental deletions.

## Final Considerations

- **Deletion of Feature Branches:** Only delete the `feature/newFeature` branch after the feature has been validated in `homolog` and merged into `production`.
- **Iterative Fixes:** Use feature branches for iterative fixes and continue making PRs to `develop` and `homolog` until the feature is stable.
- **Code Reviews:** Perform code reviews at each stage to ensure code quality and catch issues early.
- **Thorough Testing:** Conduct thorough testing in `homolog` to minimize issues in production and ensure new features meet requirements.

This structured workflow helps ensure that all changes are properly tested and validated before being promoted to production, minimizing risks and ensuring system stability.
