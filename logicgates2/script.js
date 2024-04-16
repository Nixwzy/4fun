function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }
  
  function calculate(gate) {
    var inputA = document.getElementById('inputA_' + gate).checked;
    var inputB = document.getElementById('inputB_' + gate).checked;
    var result, explanation;
  
    switch (gate) {
      case 'and':
        result = inputA && inputB;
        explanation = 'A porta AND retorna verdadeiro (1) apenas se ambos os valores de entrada A e B forem verdadeiros (1).';
        document.getElementById('andResult').innerHTML = result ? 'Sinal liberado' : 'Sinal bloqueado';
        document.getElementById('andExplanation').innerHTML = explanation;
        break;
      case 'nand':
        result = !(inputA && inputB);
        explanation = 'A porta NAND retorna falso (0) apenas se ambos os valores de entrada A e B forem verdadeiros (1).';
        document.getElementById('nandResult').innerHTML = result ? 'Sinal liberado' : 'Sinal bloqueado';
        document.getElementById('nandExplanation').innerHTML = explanation;
        break;
      case 'or':
        result = inputA || inputB;
        explanation = 'A porta OR retorna verdadeiro (1) se pelo menos um dos valores de entrada A ou B for verdadeiro (1).';
        document.getElementById('orResult').innerHTML = result ? 'Sinal liberado' : 'Sinal bloqueado';
        document.getElementById('orExplanation').innerHTML = explanation;
        break;
      case 'xor':
        result = inputA !== inputB;
        explanation = 'A porta XOR retorna verdadeiro (1) apenas se um dos valores de entrada A ou B for verdadeiro (1), mas não ambos.';
        document.getElementById('xorResult').innerHTML = result ? 'Sinal liberado' : 'Sinal bloqueado';
        document.getElementById('xorExplanation').innerHTML = explanation;
        break;
      case 'nor':
        result = !(inputA || inputB);
        explanation = 'A porta NOR retorna verdadeiro (1) apenas se ambos os valores de entrada A e B forem falsos (0).';
        document.getElementById('norResult').innerHTML = result ? 'Sinal liberado' : 'Sinal bloqueado';
        document.getElementById('norExplanation').innerHTML = explanation;
        break;
      case 'not':
        result = !inputA;
        explanation = 'A porta NOT inverte o valor de entrada A. Ou seja, retorna verdadeiro (1) se A for falso (0) e falso (0) se A for verdadeiro (1).';
        document.getElementById('notResult').innerHTML = result ? 'Sinal liberado' : 'Sinal bloqueado';
        document.getElementById('notExplanation').innerHTML = explanation;
        break;
      default:
        result = null;
        explanation = null;
    }
  }
  