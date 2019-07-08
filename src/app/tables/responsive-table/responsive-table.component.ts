import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnDestroy } from '@angular/core'
import { ResponsiveTableHelpers } from './helpers.data'
import { MatPaginator, PageEvent, MatTableDataSource, Sort } from '@angular/material'
import { Subject } from 'rxjs/internal/Subject'
import { orderBy } from 'lodash'
import { FormControl } from '@angular/forms'
import { distinctUntilChanged, takeUntil, debounceTime } from 'rxjs/operators'
import { ResponsiveTableService } from './responsive-table.service'
import { UserData } from '../interfaces'
@Component({
    selector: 'app-responsive-table',
    templateUrl: './responsive-table.component.html',
    styleUrls: ['./responsive-table.component.scss']
})
export class ResponsiveTableComponent implements OnInit, OnDestroy {
    destroy$: Subject<void> = new Subject()
    displayedColumns = ['ID', 'Name', 'Progress', 'Color']
    rows: UserData[] = []
    filterBy: FormControl = new FormControl('')
    @ViewChild(MatPaginator) paginator1!: MatPaginator
    helpers = ResponsiveTableHelpers
    dataSource = new MatTableDataSource<UserData>([])
    pageLength = 0
    pageSize = 10
    pageSizeOptions: number[] = [10, 25, 50, 100]
    @Input() status
    @Input() actionStatus
    @Output() edit = new EventEmitter()
    @Output() delete = new EventEmitter()
    @Output() view = new EventEmitter()
    @Output() page = new EventEmitter()
    @Output() sort = new EventEmitter()
    @Output() dup = new EventEmitter()
    pageEvent!: PageEvent
    constructor(private service: ResponsiveTableService) {}

    ngOnDestroy(): void {
        this.destroy$.next()
        this.destroy$.complete()
    }

    ngOnInit() {
        this.getRows()
        this.filterBy.valueChanges
            .pipe(
                debounceTime(200),
                distinctUntilChanged(),
                takeUntil(this.destroy$)
            )
            .subscribe(filterBy => this.applyFilter(filterBy))
    }

    getRows() {
        for (let i = 0; i < this.helpers.rows.length; i++) {
            this.rows = [...this.rows, this.helpers.rows[i]]
        }
        this.service.getAll().subscribe(r => {
            this.rows = r
            console.log(r)
        })
        this.dataSource = new MatTableDataSource(this.rows)
        this.pageLength = this.rows.length
        setTimeout(() => {
            this.dataSource.paginator = this.paginator1
        }, 1000)
    }
    /**
     * Sort data table
     * @param  {Sort} sort          The sort info (current active and direction)
     * @return {void}
     */
    sortDataTable(sort: Sort): void {
        this.dataSource.data = this.sortData(this.dataSource.data, sort)
    }

    sortData(data: any[], sort: Sort = { active: 'ID', direction: 'asc' }) {
        const { active, direction } = sort
        if (!active || direction === '') {
            return data
        }
        const rawData = data.slice()
        switch (active) {
            case 'ID':
                return orderBy(rawData, ['ID'], direction)
            case 'Name':
                return orderBy(rawData, ['Name'], direction)
            case 'Progress':
                return orderBy(rawData, ['Progress'], direction)
            case 'Color':
                return orderBy(rawData, ['Color'], direction)
            default:
                return orderBy(rawData, ['ID'], direction)
        }
    }

    applyFilter(filterBy: string): void {
        this.dataSource.filter = (filterBy || '').trim().toLowerCase()
    }
}
