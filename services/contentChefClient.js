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
}

export const contentChef = new ContentChef();
