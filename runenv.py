import subprocess

process = subprocess.Popen('.venv/Scripts/activate', stdout=subrocess.PIPE, stderr=subprocess.PIPE, shell=True)

stdout, stderr = process.communicate()

# print("Standard Output:")
# print(stdout.decode())
# print("Standard Error:")
# print(stderr.decode())
