import ContentChefClient, { createUrl } from '@contentchef/contentchef-node';

class ContentChef {
  client;
  targetDate;
  defaultChannel = 'example-ch';
  onlineChannel;

  constructor() {
    this.client = ContentChefClient({
      spaceId: 'your-contentChef-spaceId',
    }, this.targetDate);
    this.onlineChannel = this.client.onlineChannel('your-contentChef-api-key', this.defaultChannel);
  }

  setTargetDate = (targetDate) => {
    this.targetDate = targetDate;
  }

  searchContents = async () => {
    try {
      return (await this.onlineChannel.search({
        skip: 0,
        take: 10,
        contentDefinition: 'top-site',
        sorting: '+onlineDate'
      })).data.items
    } catch (e) {
      console.log('an error occurred retrieving your contents');
      return Promise.resolve([])
    }
  }

  getContent = async (publicId) => {
    try {
      const result = await this.onlineChannel
        .content({
          publicId
        });
      return Promise.resolve(result.data);
    } catch (e) {
      console.log(`an error occurred retrieving your content ${publicId}`);
      return Promise.resolve(null);
    }
  }

  getImageUrl = (publicId) => {
    return createUrl(publicId);
}
}

export const contentChef = new ContentChef();
