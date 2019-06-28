export class UploadCatalogServiceMocked {

  uploadCatalog(file: File) {
    return {
      'created': [
        {
          'id': 'b9831585-96d2-4561-a0f2-c0cc397a3918',
          'shortDescription': 'remedial2'
        }
      ],
      'already_exists': [
        {
          'id': '60a2ac6e-da5c-4787-86ef-567674ba6c50',
          'shortDescription': 'remedial1'
        }
      ]
    };
  }
}


