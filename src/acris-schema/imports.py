import os


def output_requires(path):
    with os.scandir(path) as it:
        for entry in it:
            if entry.name.endswith(".json") and entry.is_file():
                print(f'const {entry.name.split(".")[0]} = require(\'../utm-schema/{entry.name}\')')

    with os.scandir(path) as it:
        for entry in it:
            if entry.name.endswith(".json") and entry.is_file():
                print(f'ajv.addSchema({entry.name.split(".")[0]})')

print(output_requires('/home/harry/Programming/TEKTowr/fly2plan/utmo-dashboard-typescript/src/acris-schema/utm-schema'))