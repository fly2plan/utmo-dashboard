import os
import json
import re


def create_new_schema(path):
    objects = {}
    with os.scandir(path) as it:
        for entry in it:
            if entry.name.endswith(".json") and entry.is_file():
                with open(path + f'/{entry.name}', "r") as read_file:
                    data = json.load(read_file)

                    title = data['title']
                    if title != None:
                        objects[title] = data

    newObject = {}
    newObject['definitions'] = objects
    definitions = newObject['definitions'].keys()

    firstP = re.compile("\"\$ref\": \"([a-zA-Z]*?)Extension.schema.json\"")
    secondP = re.compile("\"\$ref\": \"([a-zA-Z]*?)(?<!Extension).schema.json\"")
    with os.scandir(path) as it:
        for entry in it:
            if entry.name.endswith(".json") and entry.is_file():
                with open(path + f'/{entry.name}', "r") as read_file:
                    data = json.load(read_file)
                    data_string = json.dumps(data)

                    refs = firstP.findall(data_string)
                    refs.extend(secondP.findall(data_string))

                    print(data_string)

                    for ref in refs:
                        definition = [i for i in definitions if i.lower() == ref.lower()][0]
                        data_string = re.sub(
                            f"\"\$ref\": \"{ref}Extension.schema.json\"", f"\"$ref\": \"#/definitions/{definition}\"", data_string)
                        data_string = re.sub(
                            f"\"\$ref\": \"{ref}.schema.json\"", f"\"$ref\": \"#/definitions/{definition}\"", data_string)

                    new_data = json.loads(data_string)

                    title = data['title']
                    if title != None:
                        objects[title] = new_data
    
    finalObject = {}
    finalObject['definitions'] = {}

    for definition in newObject['definitions']:
        if '$schema' in newObject['definitions'][definition]:
            if newObject['definitions'][definition]['$schema'].split('/')[-2].split('-')[1][-1] == '3':
                print(newObject['definitions'][definition])
                continue
            
        finalObject['definitions'][definition] = newObject['definitions'][definition]


    with open('/home/harry/Programming/TEKTowr/fly2plan/utmo-dashboard-typescript/src/acris-schema/utm-schema/mergedSchema.json', "w") as write_file:
        json.dump(finalObject, write_file)


create_new_schema('/home/harry/Programming/TEKTowr/fly2plan/utmo-dashboard-typescript/src/acris-schema/utm-schema/schemas')
