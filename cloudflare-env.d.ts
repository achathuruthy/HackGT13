declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    XAI_API_KEY?: string;
    XAI_MODEL?: string;
    BUCKET?: R2Bucket;
  }
}
