from models.main import MongoBaseModel

# Model cụ thể của bạn kế thừa từ MongoBaseModel
class GameSessionModel(MongoBaseModel):
    player_name: str
    class Config(MongoBaseModel.Config): # Kế thừa Config của lớp cha
        collection_name = "gameSession"