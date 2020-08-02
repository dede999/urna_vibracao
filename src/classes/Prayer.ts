import axios from "axios";

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
  private baseURL = "http://gsbm.org.br/apps/urna_vibracao/api/";

  constructor(public type: string) {
    const list = localStorage.getItem(this.type);
    this.prayerRepo = list ? JSON.parse(list) : [];
  }

  private setLocalStorage(): void {
    localStorage.setItem(this.type, JSON.stringify(this.prayerRepo));
  }

  public async insert(newPrayer: PrayerData): Promise<void> {
    await axios
      .post(`${this.baseURL}insert.php`, newPrayer)
      .then(resp => {
        console.log(resp);
        this.prayerRepo.push(newPrayer);
      })
      .catch(err => console.log(err));
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
