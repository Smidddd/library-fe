import { Component } from '@angular/core';
import {Genre} from "../../common/model/genres.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService} from "angular-toastify";
import {GenreService} from "../../common/service/genre.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
@UntilDestroy()
@Component({
  selector: 'app-genre-detail-page',
  templateUrl: './genre-detail-page.component.html',
  styleUrls: ['./genre-detail-page.component.css']
})
export class GenreDetailPageComponent {
  genre?: Genre;

  private genreId: number | null;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: GenreService,
              private toastService: ToastService) {
    this.genreId = Number(route.snapshot.paramMap.get('genreId'));
    this.getGenre();
  }
  getGenre(): void {
    if (this.genreId) {
      this.service.getGenre(this.genreId).pipe(untilDestroyed(this)).subscribe((genre: Genre) => {
        this.genre = genre;
      });
    }
  }
  cancel(): void {
    this.router.navigate(['genre']);
  }
  updateGenre(genre: Genre): void { // PREMIESTNENE Z user-page.component.ts
    this.service.updateGenre(genre).pipe(untilDestroyed(this)).subscribe(() => {
      this.toastService.success('Zaner bol uspesne zmeneny.');
    }, () => { this.toastService.error('Chyba. Zaner nebol zmeneny.'); })
  }
}
