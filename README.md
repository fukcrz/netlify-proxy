# Netlify Proxy

This is a simple Netlify Edge Function that acts as a proxy, forwarding all incoming requests to a specified target URL.

## How it works

The core logic is in `netlify/edge-functions/proxy.ts`. It captures every request made to the Netlify site and forwards it to the URL defined in the `TARGET_URL` environment variable. This is useful for:

*   **Hiding the real API endpoint:**  You can expose a clean URL to your users while keeping the actual API endpoint private.
*   **Bypassing CORS issues:**  By proxying requests through your own domain, you can avoid cross-origin resource sharing (CORS) problems.
*   **Adding custom logic:**  You can modify the request or response in the edge function before forwarding it (e.g., adding headers, logging, etc.).

## Setup

This project has no dependencies and requires no installation steps. Simply deploy it to Netlify and configure the environment variable.

1.  **Deploy to Netlify:**
    You can deploy this project to Netlify in several ways:
    *   **Web UI:** Click the "Deploy to Netlify" button below to create a new site from this repository.
    *   **CLI:** Use the Netlify CLI to deploy the project from your local machine.
    *   **Git:** Connect your Git repository to Netlify for continuous deployment.

2.  **Set the `TARGET_URL` environment variable:**
    In your Netlify project settings, create a new environment variable called `TARGET_URL` and set its value to the URL you want to proxy requests to. For example:
    ```
    TARGET_URL=https://api.example.com
    ```

## Usage

After deploying and configuring the `TARGET_URL`, any request made to your Netlify site will be proxied. For example, if your Netlify site is at `https://my-proxy.netlify.app/`, a request to `https://my-proxy.netlify.app/users` will be forwarded to `https://api.example.com/users`.