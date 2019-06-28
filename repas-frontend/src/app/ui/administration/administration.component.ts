import {Component, OnInit} from '@angular/core';
import {UploadCatalogService} from '../../../services/upload.catalog.service';
import {MapLogics} from '../../../data-model/logic-model/MapLogics';
import * as uuid from 'uuid';
import {ExceptionHadling} from '../../../data-model/ExceptionHadling';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  fileData: File = null;
  mapLogic: MapLogics;
  imported: boolean;
  uuid: string;
  loading = false;
  exception: ExceptionHadling;

  constructor(private uploadCatalogService: UploadCatalogService, private translate: TranslateService) {
  }

  ngOnInit() {
  }

  fileProgress(files: FileList) {
    this.fileData = files.item(0);
  }

  isCreatedLogic() {
    return (this.mapLogic != null) && (this.mapLogic.created != null) && (this.mapLogic.created[0] != null);
  }


  isExistsAlready() {
    return (this.mapLogic != null) && (this.mapLogic.already_exists != null) && (this.mapLogic.already_exists[0] != null);
  }

  onSubmit() {
    this.loading = true;
    this.mapLogic = null;
    this.uploadCatalogService.uploadCatalog(this.fileData)
      .subscribe(data => {
          this.mapLogic = data;
          this.imported = true;
          this.loading = false;
        }, error => {
          this.loading = false;
          this.imported = false;
          this.exception = new ExceptionHadling();
          this.exception.code = error.error.code;
          this.exception.message = this.translate.instant(error.error.message);
          this.exception.cause = error.error.cause;
        }
      );
  }

  onClickGenerate() {
    const myId = uuid.v4();
    this.uuid = myId;
  }
}
