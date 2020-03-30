import ContentChefClient from '@contentchef/contentchef-node';

class ContentChef {
  client = undefined;
  targetDate = undefined;
  defaultChannel = 'example-ch';

  constructor() {
    this.client = ContentChefClient({
      apiKey: "your-contentChef-api-key",
      host: "your-contentChef-host",
      spaceId: 'your-contentChef-spaceId',
    }, this.targetDate);
  }

  setTargetDate = (targetDate) => {
    this.targetDate = targetDate;
  }

  searchPreviewStagingContents = async () => {
    try {
      return (await this.client.previewChannel(this.defaultChannel, 'staging').search({
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

  getPreviewStagingContent = async (publicId) => {
    try {
      const result = await this.client
        .previewChannel(this.defaultChannel, 'staging')
        .content({
          publicId
        });
      return Promise.resolve(result.data);
    } catch (e) {
      console.log(`an error occurred retrieving your content ${publicId}`);
      return Promise.resolve(null);
    }
  }
}

export const contentChef = new ContentChef();
