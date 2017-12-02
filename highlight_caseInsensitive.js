Editor.SelectWord(0);
var str = Editor.GetSelectedString(0);
if (str) {
    Editor.Left();
    Editor.SearchNext(str, 32);
}
Editor.SearchClearMark(0);
