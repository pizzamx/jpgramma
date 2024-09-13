# -*- coding: utf-8 -*-
import HTMLParser, os, re

def esc(m):
    s = m.group(0)
    try:
        s = h.unescape(s)
    except UnicodeDecodeError:
        print s
    finally:
        return s.encode('utf8')

if __name__ == '__main__':
    global h
    h = HTMLParser.HTMLParser()
    for fn in os.listdir('.'):
        if os.path.isfile(r'./' + fn) and  fn[-3:] != '.py' and fn[0] != '.':
            f = open(fn, 'r')
            s = f.read()
            f.close()
            s = re.sub(r'\&#\d{5};', esc, s)
            f = open(fn, 'w')
            f.write(s)
            f.close()