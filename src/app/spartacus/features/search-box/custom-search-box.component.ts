import { Component } from "@angular/core";
import { CmsSearchBoxComponent, WindowRef, RoutingService } from "@spartacus/core";
import { SearchBoxComponent, CmsComponentData, SearchBoxComponentService } from "@spartacus/storefront";

@Component({
  selector: 'cx-searchbox',
  templateUrl: './custom-search-box.component.html',
  styleUrls: ['./custom-search-box.component.scss'],
})
export class CustomSearchBoxComponent extends SearchBoxComponent {
  constructor(searchBoxComponentService: SearchBoxComponentService,
    componentData: CmsComponentData<CmsSearchBoxComponent>,
    winRef: WindowRef,
    routingService: RoutingService) {
    super(searchBoxComponentService, componentData, winRef, routingService);
  }
}
