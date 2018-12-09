import { LabnotebookModule } from './labnotebook.module';

describe('LabnotebookModule', () => {
  let labnotebookModule: LabnotebookModule;

  beforeEach(() => {
    labnotebookModule = new LabnotebookModule();
  });

  it('should create an instance', () => {
    expect(labnotebookModule).toBeTruthy();
  });
});
