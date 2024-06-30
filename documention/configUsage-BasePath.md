# Setting Up Base Path for a Specific Folder in Vite, React Router, and .htaccess

These configurations ensure that your application's routing and asset loading behave correctly whether you're testing with a specific folder (`/test-react-app`) or deploying to a normal domain (`/`). Adjust the `base` and `basename` values as needed for your project's requirements.

**Note:** `/test-react-app` is used here as an example folder name. You can replace it with any folder name you intend to serve your application from.

## Vite Configuration (`vite.config.ts`)

    ```typescript
    import { defineConfig } from "vite";

    export default defineConfig({
    base: "/test-react-app", // Used with a specific folder
    // base: "/", // Used for normal domain and dev.domain
    });
    ```

## React Router Configuration (`router.tsx`)

```typescript
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([], {
  basename: "/test-react-app", // Used with a specific folder
  // basename: "/", // Used for normal domain and dev.domain
});
```

## .htaccess Configuration

Create or update your `.htaccess` file in the root directory of your project with the following configuration:

**For a Specific Folder (e.g., `/test-react-app`)**

    ```apache
    <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /test-react-app/
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /test-react-app/index.html [L]
    </IfModule>
        ```

**For Normal Domain and Dev Domain (without a specific folder)**

    ```apache
    <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
    </IfModule>
    ```

Adjust these configurations based on whether you are serving your application from a specific folder or directly from the root (/). This setup ensures that your application works correctly with its routing and asset paths in different deployment environments.
