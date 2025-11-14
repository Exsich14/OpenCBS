import sys

# OpenCBS Official Python port
class OpenCBS:
    app_name = "OpenCBS"

    @staticmethod
    def info(msg):
        print(f"[INFO] [{OpenCBS.app_name}] {msg}")

    @staticmethod
    def warn(msg):
        print(f"[WARN] [{OpenCBS.app_name}] {msg}")

    @staticmethod
    def error(msg):
        print(f"[ERROR] [{OpenCBS.app_name}] {msg}")
        sys.exit(1)

# Example
score = 10

if score == 0:
    OpenCBS.warn("Score is not initialized")
elif score == -1:
    OpenCBS.error("Score is -1, cannot continue")
else:
    OpenCBS.info("All is okay (maybe)")
