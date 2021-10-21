export interface ISite {
  id: number;
  name: string;
}

export class SiteModel implements ISite {
  id: number;
  name: string;

  constructor(data: ISite) {
    this.id = data.id ?? null;
    this.name = data.name ?? '';
  }
}

export const siteFactory = (site: any): SiteModel => (site ? new SiteModel(site) : ({} as SiteModel));
