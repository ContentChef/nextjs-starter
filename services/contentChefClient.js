import ContentChefClient from '@contentchef/contentchef-node';

class ContentChef {
  client;
  targetDate;
  defaultChannel = 'example-ch';
  channel;

  constructor() {
    this.client = ContentChefClient({
      spaceId: process.env.NEXT_PUBLIC_CHEF_SPACE_ID,
    }, this.targetDate);
    const shouldUsePreview = process.env.NEXT_PUBLIC_CHEF_USE_PREVIEW === 'true';

    const createMethod = process.env.NEXT_PUBLIC_CHEF_USE_PREVIEW === 'true' ? 
      this.client.previewChannel : this.client.onlineChannel;

    this.channel = !shouldUsePreview ? 
                      this.client.onlineChannel(process.env.NEXT_PUBLIC_CHEF_API_KEY, this.defaultChannel): 
                      this.client.previewChannel(process.env.NEXT_PUBLIC_CHEF_API_KEY, this.defaultChannel, 'staging');
                    
  }

  setTargetDate = (targetDate) => {
    this.targetDate = targetDate;
  }

  searchTopSitesContents = async (publicIdFilter = [] , take = 10) => {
    try {
      return (await this.channel.search({
        skip: 0,
        take,
        publicId: !!publicIdFilter && publicIdFilter.length && publicIdFilter.length > 0 ? publicIdFilter : undefined,
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
      const result = await this.channel
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
