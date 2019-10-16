#!/bin/bash
pdflatex ResearchProject -synctex=1 -interaction=nonstopmode -aux-directory=metadata %.tex
biber ResearchProject -output-directory=metadata -input-directory=metadata %

pdflatex ResearchProject -synctex=1 -interaction=nonstopmode -aux-directory=metadata %.tex

