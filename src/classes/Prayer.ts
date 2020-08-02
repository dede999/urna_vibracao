export interface PrayerData {
  name?: string;
  age?: number;
  address?: string;
  email: string;
  message?: string;
  remember: boolean;
  deathDay?: string;
}

export default class Prayer {
  prayerRepo: PrayerData[];

  constructor(public type: string) {
    const list = localStorage.getItem(this.type);
    this.prayerRepo = list ? JSON.parse(list) : [];
  }

  private setLocalStorage(): void {
    localStorage.setItem(this.type, JSON.stringify(this.prayerRepo));
  }

  public insert(newPrayer: PrayerData): void {
    this.prayerRepo.push(newPrayer);
    this.setLocalStorage();
  }

  public modify(newPrayer: PrayerData, index: number) {
    this.prayerRepo.splice(index, 1, newPrayer);
    this.setLocalStorage();
  }

  public remove(index: number): void {
    this.prayerRepo.splice(index, 1);
    this.setLocalStorage();
  }

  public retrieve(): PrayerData[] {
    return this.prayerRepo;
  }
}
