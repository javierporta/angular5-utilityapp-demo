import { Component, OnInit } from '@angular/core';
import { Todos } from '../../_models/todos';
import { ApiService } from '../../_services/api.service';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-publish-by-type-of-report',
  templateUrl: './publish-by-type-of-report.component.html',
  styleUrls: ['./publish-by-type-of-report.component.css']
})
export class PublishByTypeOfReportComponent implements OnInit {

  reportTypesList: any;

  constructor(private apiService: ApiService) { }

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  ngOnInit(){
      this.dropdownList =  [];
      this.selectedItems = [];
      this.dropdownSettings = { 
                                singleSelection: false, 
                                text:"Select Type of Reports",
                                selectAllText:'Select All',
                                unSelectAllText:'Clear All',
                                enableSearchFilter: true,
                                classes:"myclass custom-class"
                              };    
                              
              this.getAllReportTypes();
  }
  


  publishSchedulesByTypeOfReport(){
    console.log(this.selectedItems);
  }

  getAllReportTypes(){
       this.apiService.getAllReportTypes().subscribe(
          data => { 
            this.reportTypesList = data;
            
            console.time('pushing');
            this.reportTypesList.forEach(element => {
              //ToDo we can save time if it comes with this data from the server
              let reportType={
                  id:element.id,
                  itemName:element.title //ToDo Replace for report type
              }
              this.dropdownList.push(reportType);
            });
            console.timeEnd('pushing');
          },
          err => console.error(err),
          () => console.log('done loading reportTypesList')
        );
      }
    
}
