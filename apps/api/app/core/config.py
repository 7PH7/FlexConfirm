from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    ENV: str = "dev"
    FRONTEND_ORIGIN: str = "http://localhost:3000/"
    DATABASE_URL: str = "postgresql+asyncpg://user:pass@localhost:5432/db"
    REDIS_URL: str | None = None
    SUPABASE_URL: str | None = None
    SENTRY_DSN: str | None = None

    class Config:
        env_file = ".env"

settings = Settings()