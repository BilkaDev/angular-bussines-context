import { Component, Input } from "@angular/core";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"]
})
export class TaskComponent {

  @Input()
  public wo_id!: number;
  @Input()
  public description!: string;
  @Input()
  public received_date!: string;
  @Input()
  public assigned_to!: string;
  @Input()
  public status!: string;
  @Input()
  public priority!: string;

}