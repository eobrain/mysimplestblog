// function - deploy DP in modal
var cbAccountId = 'c1arw796';
var cbAppKeyPrefix = 'F7654000';

var cbDomain = 'https://' + cbAccountId + '.caspio.com';
var cbDataPagePrefix = cbDomain + '/dp/' + cbAppKeyPrefix;

function openLogModal(modalTitle, dataPageSrc) {
    $('#cb-modal-body').html('');
    var dataPageScript = document.createElement("script");
    dataPageScript.src = dataPageSrc;
    document.getElementById('cb-modal-body').appendChild(dataPageScript);

    $('#cb-modal-title').html(modalTitle);
    $('#cb-modal').modal({
        backdrop: 'static',
        keyboard: false
    });
}

/*UPDATE OPENMODAL*/
// function - deploy DP asyncrhonously
function deployDP(containerID, appKey, params) {
    var params = params || '';
    var dataPageScript = document.createElement("script");
    var container = document.getElementById(containerID);
    dataPageScript.src = cbDataPagePrefix + appKey + '/emb' + params;

    container.innerHTML = '';
    container.appendChild(dataPageScript);
}
// function - refresh DP
function refreshDP(appKey) {
    for (var key in window.dataPageManagerObj.dataPages) {
        if (key.search(cbAppKeyPrefix + appKey) != -1) {
            window.dataPageManagerObj.dataPages[key].refresh();
        }
    }
}


// function - deploy DP in modal
function openModal(modalTitle, appKey, params) {
    $('#cb-modal-body').html('');
    deployDP('cb-modal-body', appKey, params);

    $('#cb-modal-title').html(modalTitle);
    $('#cb-modal').modal({
        backdrop: 'static',
        keyboard: false
    });
    // draggable modal
    $(".modal-header").on("mousedown", function(mousedownEvt) {
        var $draggable = $(this);
        var x = mousedownEvt.pageX - $draggable.offset().left,
            y = mousedownEvt.pageY - $draggable.offset().top;
        $("body").on("mousemove.draggable", function(mousemoveEvt) {
            $draggable.closest(".modal-content").offset({
                "left": mousemoveEvt.pageX - x,
                "top": mousemoveEvt.pageY - y
            });
        });
        $("body").one("mouseup", function() {
            $("body").off("mousemove.draggable");
        });
        $draggable.closest(".modal").one("bs.modal.hide", function() {
            $("body").off("mousemove.draggable");
        });
    });
}


function iframeLoaded(elementId) {
    setTimeout(function() {
        var $iframe = $('#' + elementId).length ? $('#' + elementId) : window.parent.$('#' + elementId);
        var padding = 0;

        $iframe.css('height', '0px');
        var height = $iframe.get(0).contentWindow.document.body.scrollHeight + padding;
        $iframe.css('height', height + 'px');
    }, 2000);
}

// function - get URL Vars
function getUrlVars() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        hash[1] = unescape(hash[1]);
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }

    return vars;
}
var urlVars = getUrlVars();

// hide default submit button row at the bottom of inline forms
document.addEventListener('DataPageReady', function(e) {
    $('.cb-btn-reset').bind('click', function() {
        $(this).closest('form').find('select, input[type="text"]').val('');
        $(this).closest('form').find('input[type="submit"]').click();
    });

    // checkboxes to add/remove class to target
    $('input[role="cb-toggle-table"]').click(function() {
        var targetId = $(this).data('target');
        var className = $(this).data('class');

        if (this.checked) {
            $('#' + targetId).addClass(className);
        } else {
            $('#' + targetId).removeClass(className);
        }
    });

    if (e.detail.appKey == "caf26000c39e0e3848de47d18ca2") {
        fileInputs = $("input[id*='EditRecordDocument'][type='file']");

        for (var i = fileInputs.length - 1; i >= 0; i--) {
            if (($(fileInputs[i]).siblings("a")[0]).innerHTML == "") {
                $(fileInputs[i]).css("width", "100%");
            }
        }
    }
});

function setModuleTitle(title) {
    $('#module-title').html(title);
}

$(function() {
    let sidebarToggler;
    $(window).resize(function() {
        clearTimeout(sidebarToggler);
        sidebarToggler = setTimeout(function() {
            toggleSideBar();
        }, 100);
    });

    window.localStorage.getItem('sidebarToggled') == 'true' ?
        $('#accordionSidebar').addClass('toggled') : $('#accordionSidebar').removeClass('toggled');

    $('#sidebarToggle').on('click', function() {
        toggleSideBar();
    });

    $('#sidebarToggleTop').on('click', function() {
        toggleSideBar();
    });

    function sidebarToggledLg() {
        if ($('#accordionSidebar').hasClass('toggled')) {
            window.localStorage.setItem('sidebarToggled', true);
            $('#content-wrapper').addClass('content-left-margin-104').removeClass('content-left-margin-224 content-left-margin-0');
        } else {
            window.localStorage.setItem('sidebarToggled', false);
            $('#content-wrapper').addClass('content-left-margin-224').removeClass('content-left-margin-104 content-left-margin-0');
        }
    }

    function sidebarToggledSm() {
        if ($('#accordionSidebar').hasClass('toggled')) {
            window.localStorage.setItem('sidebarToggled', true);
            $('#content-wrapper').addClass('content-left-margin-0').removeClass('content-left-margin-104 content-left-margin-224');
        } else {
            window.localStorage.setItem('sidebarToggled', false);
            $('#content-wrapper').addClass('content-left-margin-104').removeClass('content-left-margin-0 content-left-margin-224');
        }
    }

    function toggleSideBar() {
        $(window).width() + 17 < 768 ? sidebarToggledSm() : sidebarToggledLg();
    }

    //Load the chart in the viewport
    $('.chart-container').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if (isInView && $(this).attr('data-isloaded') == 'N') {
            if (visiblePartY == 'top') {
                var dataPageScript = document.createElement("script");
                dataPageScript.src = $(this).attr('data-dpsrc');

                this.appendChild(dataPageScript);
                $(this).attr({ 'data-isloaded': 'Y' });
            }
            else if (visiblePartY == 'bottom') {

            }
            else {

            }
        } else {

        }
    });

    var urlVars = getUrlVars();
    toggleSideBar();
});