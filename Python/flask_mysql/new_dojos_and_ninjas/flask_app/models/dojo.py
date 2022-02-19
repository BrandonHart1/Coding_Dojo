from flask_app.config.mysqlconnection import connectToMySQL

class Dojo:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL("dojos_ninjas_schema").query_db(query)
        dojos = []

        for dojo in results:
            dojos.append( cls(dojo) )
        return dojos