import { selectTodoOnQuery, selectTodos, selectTodosWithListContext } from '../todos.selectors';

import {
  todo as todoFixture,
  todoNoDueDate,
  todos as todosFixture,
} from '../../__fixtures__/todos.fixtures';

import { DEFAULT_STATE as DEFAULT_LIST_CONTEXT } from '../../contexts/list.context';

describe('selectTodoOnQuery', () => {
  it('should have a priorityObj attribute', () => {
    const todo = selectTodoOnQuery(todoFixture);

    expect(todo.priorityObj).toBeDefined();
    expect(todo.priorityCode === todo.priorityObj.code);
  });

  it('should have a statusObj attribute', () => {
    const todo = selectTodoOnQuery(todoFixture);

    expect(todo.statusObj).toBeDefined();
    expect(todo.statusObj === todo.statusObj.code);
  });

  it('should have an isOverdue attribute (false)', () => {
    const todo = selectTodoOnQuery(todoNoDueDate);

    expect(todo.isOverdue).toBeFalsy();
  });

  it('should have an isOverdue attribute (true)', () => {
    const todo = selectTodoOnQuery(todoFixture);

    expect(todo.isOverdue).toBeTruthy();
  });
});

describe('selectTodos', () => {
  it('should return empty collection when none supplied', () => {
    const todos = selectTodos();

    expect(todos).toBeDefined();
    expect(todos.length).toBe(0);
  });

  it('should select with default options', () => {
    const todos = selectTodos(todosFixture);

    expect(todos.length).toBe(todosFixture.length);
    expect(todos[0].summary).toBe('Be calm');
  });

  it('should filter by priority', () => {
    const todos = selectTodos(todosFixture, { matches: { priorityCode: 'high' } });

    expect(todos.length).toBe(4);
  });

  it('should order by summary attribute', () => {
    const todos = selectTodos(todosFixture);

    expect(todos[0].summary).toBe('Be calm');
  });
});

describe('selectTodosWithListContext', () => {
  let listContext;

  beforeEach(() => {
    listContext = { ...DEFAULT_LIST_CONTEXT };
  });

  it('should return empty collection when none supplied', () => {
    const { items } = selectTodosWithListContext();

    expect(items).toBeDefined();
    expect(items.length).toBe(0);
  });

  it('should select with default list context', () => {
    const { items } = selectTodosWithListContext(todosFixture);

    expect(items.length).toBe(todosFixture.length);
  });

  it('should filter by priority', () => {
    listContext.matches = { priorityCode: 'high' };
    const { items } = selectTodosWithListContext(todosFixture, listContext);

    expect(items.length).toBe(4);
  });

  it('should order by summary attribute', () => {
    listContext.sort.by = 'summary';
    const { items } = selectTodosWithListContext(todosFixture, listContext);

    expect(items[0].summary).toBe('Be calm');
  });

  it('should filter by text', () => {
    listContext.search = 'be';
    const { items } = selectTodosWithListContext(todosFixture, listContext);

    expect(items.length).toBe(4);
  });

  it('should paginate the result', () => {
    listContext.pagination = { page: 2, size: 4 };
    const { page: page2 } = selectTodosWithListContext(todosFixture, listContext);

    expect(page2.length).toBe(listContext.pagination.size);
    expect(page2[0].summary).not.toBe('Be calm');

    listContext.pagination.page = 1;

    const { page: page1 } = selectTodosWithListContext(todosFixture, listContext);
    expect(page1[0].summary).toBe('Be calm');
  });
});
