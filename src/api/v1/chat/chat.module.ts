import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { modelDefineProvider } from '../common/provider';

import { ConversationSchema } from '../schema/conversation.schema';
import { MODEL_NAME } from '../ts/enums/model_enums';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...modelDefineProvider(MODEL_NAME.CONVERSATION, ConversationSchema),
    ChatGateway,
    ChatService,
  ],
})
class ChatModule {}

export { ChatModule };
