import json
from channels.generic.websocket import AsyncWebsocketConsumer
 
class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        # Connects to the default group
        self.roomGroupName = "group_chat_gfg"
        await self.channel_layer.group_add(
            self.roomGroupName,
            self.channel_name
        )
        await self.accept()
    
    async def disconnect(self, close_code):
        # Disconnects from the groupname
        await self.channel_layer.group_discard(
            self.roomGroupName,
            self.channel_layer
        )
    
    async def receive(self, info):
        # Unpacks info
        info = json.loads(info)
        user = info["user"]
        message = info["message"]
        
        # Sends the message
        await self.channel_layer.group_send(
            self.roomGroupName, {
                "type" : "sendMessage",
                "user" : user,
                "message" : message,
            })
    
    async def sendMessage(self, event):
        # Unpacks event
        user = event["user"]
        message = event["message"]
        
        info = json.dumps({"user": user, "message": message})
        await self.send(info)