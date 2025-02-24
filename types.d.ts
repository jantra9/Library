interface BookProps {
    id:number;
    title: string;
    author: string;
    genre?: string;
    total_copies?: number;
    rating?: number;
    available_copies?: number;
    description?: string;
    color?: string;
    cover?: string;
    video?:string;
    summary?:string;
    isLoanedBook?:boolean;
  }