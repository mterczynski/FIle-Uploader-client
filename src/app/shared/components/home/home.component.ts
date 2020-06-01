import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { FileService } from '../../services/file.service';
import { ApplicationFile } from '../../types/application-file';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  fileList: ApplicationFile[] = [];
  serverUrl = environment.apiUrl;
  private readonly subscriptions: Subscription[] = [];

  constructor(
    private http: HttpClient,
    private fileService: FileService,
  ) { }

  ngOnInit() {
    const fileStreamSub = this.fileService.files.subscribe(files => this.fileList = files);

    this.fileService.requestFilesUpdate();
    this.subscriptions.push(fileStreamSub);
  }

  onDeleteButtonClick(fileToRemove: ApplicationFile) {
    this.fileService.removeFile(fileToRemove);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
