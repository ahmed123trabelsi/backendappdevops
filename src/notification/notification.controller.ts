import { Controller, Post, Body, Sse, Patch, Get } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { IMessage } from './interfaces/IMessage.interface';
import { Notification } from './notification.schema';
import { CreateNotificationsDto } from './notification.dto';
import { UpdateAllUnseenNotificationDto } from './UpdateAllUnseenNotification.dto';


@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) { }

  // listening for new notification
  @Sse('listener')
  notificationListener() {
    return this.notificationService.notificationListener();
  }
  


  // create new notification
  @Post()
  async createNotification(@Body() createNotificationsDto: CreateNotificationsDto): Promise<IMessage> {
    return await this.notificationService.createNotification(createNotificationsDto);
  }

  // update all seen notifications
  @Patch()
  async updateUnseenNotificationByIds(@Body() updateAllUnseenNotificationDto: UpdateAllUnseenNotificationDto) {
    return await this.notificationService.updateUnseenNotificationByIds(updateAllUnseenNotificationDto);
  }
  


  @Get()
  async getNotifications(): Promise<Notification[]> {
    return await this.notificationService.getNotifications();
  }
//kkk
}
