from flask_app.config.mysqlconnection import connectToMySQL

class Dojo:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM ninjas"
        results = connectToMySQL("dojos_ninjas_schema").query_db(query)
        ninjas = []

        for ninja in results:
            ninjas.append( cls(ninja) )
        return ninjas