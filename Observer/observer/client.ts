import { DataController } from "./data-controller";
import { DataModel, MDataModel } from "./data-model";
import { BarGraphView, PieGraphView, TableView } from "./data_view";

export default function main() {
  const data_model = new DataModel();

  const pie_graph_view = new PieGraphView(data_model);

  const bar_graph_view = new BarGraphView(data_model);

  const table_view = new TableView(data_model);

  const data_model2 = new MDataModel();

  const pie_graph_view2 = new PieGraphView(data_model2);

  const bar_graph_view2 = new BarGraphView(data_model2);

  const table_view2 = new TableView(data_model2);

  const data_controller = new DataController();


  data_controller.notify([1, 2, 3]);

  bar_graph_view.delete();

  data_controller.notify([4, 5, 6]);
}
