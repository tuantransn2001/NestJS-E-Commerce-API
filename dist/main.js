"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const nestjs_pino_1 = require("nestjs-pino");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
        bufferLogs: true,
    });
    app.useLogger(app.get(nestjs_pino_1.Logger));
    app.useGlobalInterceptors(new nestjs_pino_1.LoggerErrorInterceptor());
    app.setGlobalPrefix('/');
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map