Editor.SelectWord(0);
var str = Editor.GetSelectedString(0);
if (str) {
    Editor.Left();
    Editor.SearchNext(str, 34);
}
Editor.SearchClearMark(0);
