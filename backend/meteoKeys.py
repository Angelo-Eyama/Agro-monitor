

import os
from dotenv import load_dotenv, dotenv_values 
load_dotenv() 

USERNAME = os.getenv("METEOMATICS_USERNAME")
PASSWORD = os.getenv("METEOMATICS_PASSWORD")