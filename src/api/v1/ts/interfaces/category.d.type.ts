interface Content {
  title: string;
  subTitle?: string;
  content: string[];
}

export interface Category {
  id: string;
  subCategoryID: string | undefined;
  title: string;
  subTitle: string;
  description: string[];
  img: string;
  contents: Content[];
}
